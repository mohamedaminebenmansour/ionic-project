import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';
import { BehaviorSubject, Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { Chef } from './chef';

const CHEFS_KEY = 'chefs';

const newChef: Chef = {
  id: '',
  name: '',
  password: ''
};

const mockChefs: Chef[] = [
  { id: '1', name: 'Greg Marine', password: 'pass123' },
  { id: '2', name: 'Jonathan Bennett', password: 'pass123' },
  { id: '3', name: 'Neil Estandarte', password: 'pass123' },
  { id: '4', name: 'Jennifer Townsend', password: 'pass123' },
  { id: '5', name: 'Casey McBride', password: 'pass123' },
  { id: '6', name: 'Diane Rivera', password: 'pass123' },
  { id: '7', name: 'Troy Gutierrez', password: 'pass123' },
  { id: '8', name: 'Priscilla Little', password: 'pass123' },
  { id: '9', name: 'Bobby Robbins', password: 'pass123' },
  { id: '10', name: 'Edmund Gardner', password: 'pass123' }
];

@Injectable({
  providedIn: 'root',
})
export class ChefsService {
  private chefs$ = new BehaviorSubject<Chef[]>([]);

  public async init(): Promise<void> {
    const chefs = await this.getAllChefs();
    if (chefs.length === 0) {
      await this.seedData();
    } else {
      await this.pushAll();
    }
  }

  public allChefs(): Observable<Chef[]> {
    return this.chefs$.asObservable();
  }

  private async getAllChefs(): Promise<Chef[]> {
    const allKeys = await Storage.keys();
    const chefKeys = allKeys.keys.filter((key) =>
      key.startsWith(CHEFS_KEY)
    );
    const chefs = await Promise.all(
      chefKeys.map((key) => this.getChefByKey(key))
    );
    return chefs;
  }

  private async pushAll(): Promise<void> {
    const chefs = await this.getAllChefs();
    this.chefs$.next(chefs);
  }

  public getChef(id: string): Promise<Chef> {
    if (id === 'new') {
      return Promise.resolve(newChef);
    }

    return this.getChefByKey(`${CHEFS_KEY}-${id}`);
  }

  private async getChefByKey(key: string): Promise<Chef> {
    const result = await Storage.get({ key });
    if (result.value !== null) {
      return JSON.parse(result.value);
    } else {
      throw new Error(`Chef with key "${key}" not found.`);
    }
  }


  private async doSaveChef(chef: Chef): Promise<void> {
    await Storage.set({
      key: `${CHEFS_KEY}-${chef.id}`,
      value: JSON.stringify(chef),
    });
  }

  public async saveChef(chef: Chef): Promise<void> {
    chef.id ??= uuidv4();
    await this.doSaveChef(chef);
    this.pushAll();
  }

  public async deleteChef(id: string): Promise<void> {
    await Storage.remove({ key: `${CHEFS_KEY}-${id}` });
    this.pushAll();
  }

  public async clearData(): Promise<void> {
    await Storage.clear();
    this.pushAll();
  }

  public async seedData(): Promise<void> {
    const results = mockChefs.map((chef) => this.doSaveChef(chef));
    await Promise.all(results);
    this.pushAll();
  }
}
