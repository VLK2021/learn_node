import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users', { database: 'okten' })
export class User {
    @PrimaryGeneratedColumn()
        id: number;

    @Column({
        type: 'varchar',
        width: 250,
        nullable: false,
    })
        firstName: string;

    @Column({
        type: 'varchar',
        width: 250,
        nullable: false,
    })
        lastName: string;

    @Column({
        type: 'int',
    })
        age?: number;

    @Column({
        type: 'varchar',
        width: 250,
        nullable: false,
        unique: true,
    })
        phone: string;

    @Column({
        type: 'varchar',
        width: 250,
        nullable: false,
        unique: true,
    })
        email: string;

    @Column({
        type: 'varchar',
        width: 250,
        nullable: false,
    })
        password: string;
}
