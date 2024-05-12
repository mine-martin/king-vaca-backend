import { MigrationInterface, QueryRunner } from "typeorm";

export class CarMigration1715507987554 implements MigrationInterface {
    name = 'CarMigration1715507987554'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "car" ADD "price" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "car" ADD "photo1" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "car" ADD "photo2" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "car" ADD "photo3" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "car" ADD "rating" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "car" ADD "overview" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "car" ADD "features" jsonb`);
        await queryRunner.query(`ALTER TABLE "car" ADD "location" jsonb`);
        await queryRunner.query(`ALTER TABLE "car" ADD "reviews" jsonb`);
        await queryRunner.query(`ALTER TABLE "car" ADD "comments" jsonb`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "car" DROP COLUMN "comments"`);
        await queryRunner.query(`ALTER TABLE "car" DROP COLUMN "reviews"`);
        await queryRunner.query(`ALTER TABLE "car" DROP COLUMN "location"`);
        await queryRunner.query(`ALTER TABLE "car" DROP COLUMN "features"`);
        await queryRunner.query(`ALTER TABLE "car" DROP COLUMN "overview"`);
        await queryRunner.query(`ALTER TABLE "car" DROP COLUMN "rating"`);
        await queryRunner.query(`ALTER TABLE "car" DROP COLUMN "photo3"`);
        await queryRunner.query(`ALTER TABLE "car" DROP COLUMN "photo2"`);
        await queryRunner.query(`ALTER TABLE "car" DROP COLUMN "photo1"`);
        await queryRunner.query(`ALTER TABLE "car" DROP COLUMN "price"`);
    }

}
