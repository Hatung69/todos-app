import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  // Giao diện API lưu trữ web này cung cấp quyền truy cập vào phiên hoặc lưu trữ cục bộ của một tên miền cụ thể. Nó cho phép, ví dụ, việc thêm, sửa đổi hoặc xóa các mục dữ liệu được lưu trữ.
  storage: Storage;

  constructor() {
    this.storage = window.localStorage;
  }
  set(key: string, value: string): void {
    this.storage[key] = value;
  }
  get(key: string): string {
    return this.storage[key] || false;
  }

  setObject(key: string, value: any): void {
    if (!value) {
      return;
    }
    this.storage[key] = JSON.stringify(value);
  }

  getObject(key: string): any {
    return JSON.parse(this.storage[key]) || '{}';
  }

  getValue<T>(key: string): T {
    const obj = JSON.parse(this.storage[key] || null);
    return <T>obj || null;
  }

  remove(key: string): any {
    this.storage.removeItem(key);
  }

  clear() {
    this.storage.clear();
  }
  get length(): number {
    return this.storage.length;
  }

  get isStorageEmpty(): boolean {
    return this.length === 0;
  }
}
