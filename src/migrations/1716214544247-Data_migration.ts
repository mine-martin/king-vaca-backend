import { MigrationInterface, QueryRunner } from "typeorm";

export class DataMigration1716214544247 implements MigrationInterface {
    name = 'DataMigration1716214544247'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cars" RENAME COLUMN "name" TO "carName"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cars" RENAME COLUMN "carName" TO "name"`);
    }

}
