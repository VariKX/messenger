interface IStorage {
  set: (name: string, item: any) => void;
  get: (name: string) => any;
  delete: (name: string) => void;
};

export const Storage: IStorage = {

  set: (name, item) => {
    localStorage.setItem("messenger_" + name, JSON.stringify(item));
  },

  get: (name) => {
    const item = localStorage.getItem("messenger_" + name);

    if (item) {
      return JSON.parse(item);
    }
  },

  delete: (name) => {
    localStorage.removeItem("messenger_" + name);
  }
}