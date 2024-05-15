import { MigrationInterface, QueryRunner } from "typeorm";

export class NewMigration1715776045548 implements MigrationInterface {
    name = 'NewMigration1715776045548'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "cars" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "price" character varying NOT NULL, "photo1" character varying NOT NULL, "photo2" character varying NOT NULL, "photo3" character varying NOT NULL, "rating" character varying NOT NULL, "overview" character varying NOT NULL, "features" jsonb, "location" jsonb, "reviews" jsonb, "comments" jsonb, CONSTRAINT "PK_fc218aa84e79b477d55322271b6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "houses" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "HouseDetailsListimage" character varying NOT NULL, "HouseName" character varying NOT NULL, "Shortdescription" character varying NOT NULL, "detailsImagesName" character varying NOT NULL, "detailsImagesPrice" character varying NOT NULL, "detailsImagesHouseimg1" character varying NOT NULL, "detailsImagesHouseimg2" character varying NOT NULL, "detailsImagesHouseimg3" character varying NOT NULL, "detailsImagesHouseimg4" character varying NOT NULL, "detailsImagesHouseimg5" character varying NOT NULL, "detailsImagesHouseimg6" character varying NOT NULL, "detailsImagesHouseimg7" character varying NOT NULL, "otherDetailsLongdescription" character varying NOT NULL, "otherDetailsLocation" character varying NOT NULL, "otherDetailsBasicinfo" character varying NOT NULL, "otherDetailsAmenities" character varying NOT NULL, "otherDetailsNearby" character varying NOT NULL, "otherDetailsReviews" character varying NOT NULL, "otherDetailsComments" character varying NOT NULL, CONSTRAINT "PK_ee6cacb502a4b8590005eb3dc8d" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "houses"`);
        await queryRunner.query(`DROP TABLE "cars"`);
    }

}
