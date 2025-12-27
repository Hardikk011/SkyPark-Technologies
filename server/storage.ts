import type { User, InsertUser, DemoRequest, InsertDemoRequest, InsertContact } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export type Contact = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  createdAt: Date;
};

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createDemoRequest(demoRequest: InsertDemoRequest): Promise<DemoRequest>;
  getDemoRequests(): Promise<DemoRequest[]>;
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
}

// Simple in-memory storage for development without a database
const usersMemory: User[] = [];
const demoRequestsMemory: DemoRequest[] = [];
const contactsMemory: Contact[] = [];

export class InMemoryStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    return usersMemory.find(u => u.id === id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return usersMemory.find(u => u.username === username);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const user: User = {
      id: globalThis.crypto?.randomUUID?.() ?? Math.random().toString(36).slice(2),
      username: insertUser.username,
      password: insertUser.password,
    };
    usersMemory.push(user);
    return user;
  }

  async createDemoRequest(demoRequest: InsertDemoRequest): Promise<DemoRequest> {
    const record: DemoRequest = {
      id: globalThis.crypto?.randomUUID?.() ?? Math.random().toString(36).slice(2),
      email: demoRequest.email,
      solution: demoRequest.solution,
      message: demoRequest.message,
      createdAt: new Date(),
    };
    demoRequestsMemory.push(record);
    return record;
  }

  async getDemoRequests(): Promise<DemoRequest[]> {
    return [...demoRequestsMemory];
  }

  async createContact(contact: InsertContact): Promise<Contact> {
    const record: Contact = {
      id: globalThis.crypto?.randomUUID?.() ?? Math.random().toString(36).slice(2),
      name: contact.name,
      email: contact.email,
      phone: contact.phone,
      subject: contact.subject,
      message: contact.message,
      createdAt: new Date(),
    };
    contactsMemory.push(record);
    return record;
  }

  async getContacts(): Promise<Contact[]> {
    return [...contactsMemory];
  }
}

export const storage = new InMemoryStorage();
