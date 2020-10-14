import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm'
import Image from './Image';


@Entity('orphanages')// nome da tabela no banco de dados
export default class Orphanage {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    latitude: number;

    @Column()
    longitude: number;

    @Column()
    about: string;

    @Column()
    instructions: string;

    @Column()
    opening_hours: string;

    @Column()
    open_on_weekends: boolean;

    // OneToMany um orfanato para muitas images 
    @OneToMany(() => Image, image => image.orphanage, {
        cascade: ['insert', 'update'] // cadastrar ou atualizar automaticamente
    })
    @JoinColumn({ name: 'orphanage_id' }) // nome da coluna que armazena o relacionamento
    images: Image[];
}