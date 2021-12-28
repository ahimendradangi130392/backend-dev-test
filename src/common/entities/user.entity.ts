import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User{
 @PrimaryGeneratedColumn()
 userId: number;

 @Column({default:null})
 email: string;

 @Column({ default:null})
 firstName: string;

 @Column({ default:null})
 lastName: string;

 @Column({ default:null})
 phoneNumber: string;

 @Column({ default:null})
 password: string;

 @Column({ default:null})
 address: string;

}