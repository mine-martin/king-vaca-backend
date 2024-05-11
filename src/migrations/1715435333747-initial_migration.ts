import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitialMigration1715435333747 implements MigrationInterface {
  name = 'InitialMigration1715435333747';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "car" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, CONSTRAINT "PK_55bbdeb14e0b1d7ab417d11ee6d" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "car"`);
  }
}
