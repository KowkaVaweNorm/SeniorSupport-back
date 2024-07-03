export abstract class Repository<T> {
  protected members: T[];

  constructor(members: T[]) {
    this.members = members;
  }

  abstract getAll(): Promise<T[]>;
  abstract getById(id: number): Promise<T | undefined>;
  abstract create(item: T): Promise<boolean>;
  abstract update(id: number, item: T): Promise<boolean>;
  abstract delete(id: number): Promise<boolean>;
}
