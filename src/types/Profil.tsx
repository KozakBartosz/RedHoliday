export default interface ProfilType {
    picture: string;
    name: string;
    doctor?: any;
    bhp?: any;
    access: 'admin' | 'user';
}
