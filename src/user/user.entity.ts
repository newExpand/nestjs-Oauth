import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// Entity 데코레이터 생성으로 의존성 주입
@Entity()
export class User {
  // PrimaryGeneratedColumn 속성으로 기본키이면서 자동 증가하는 컬럼 생성
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true })
  password: string;

  @Column()
  username: string;

  // 생성일 default: true로 기본값 설정
  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdDt: Date = new Date();

  @Column({ nullable: true })
  providerId: string;
}
