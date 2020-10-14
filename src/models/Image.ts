import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm'
import Orphanage from './Orphanage';


@Entity('images')// nome da tabela no banco de dados
export default class Image {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    path: string;

    //muitas imagem que pertecem a um orfanato
    @ManyToOne(() => Orphanage, orphanage => orphanage.images)
    @JoinColumn({ name: 'orphanage_id' }) // nome da coluna que armazena o relacionamento
    orphanage: Orphanage;
    
}