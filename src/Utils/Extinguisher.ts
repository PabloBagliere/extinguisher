export default interface Extinguisher {
  id?: string;
  brand: string;
  capacity: number;
  class: string;
  extirationDate: string | Date;
  hidraulico: string | Date;
  ubication: string;
  type: string;
  photo: File | string;
  isService: boolean;
  createDate?: Date | firebase.default.firestore.Timestamp;
  updateDate?: Date | firebase.default.firestore.Timestamp;
}
