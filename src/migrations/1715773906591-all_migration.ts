import { MigrationInterface, QueryRunner } from "typeorm";

export class AllMigration1715773906591 implements MigrationInterface {
    name = 'AllMigration1715773906591'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "house_details" ("id" SERIAL NOT NULL, "HouseDetailsListimage" character varying NOT NULL, "HouseName" character varying NOT NULL, "Shortdescription" character varying NOT NULL, "detailsImagesName" character varying NOT NULL, "detailsImagesPrice" character varying NOT NULL, "detailsImagesHouseimg1" character varying NOT NULL, "detailsImagesHouseimg2" character varying NOT NULL, "detailsImagesHouseimg3" character varying NOT NULL, "detailsImagesHouseimg4" character varying NOT NULL, "detailsImagesHouseimg5" character varying NOT NULL, "detailsImagesHouseimg6" character varying NOT NULL, "detailsImagesHouseimg7" character varying NOT NULL, "otherDetailsLongdescription" character varying NOT NULL, "otherDetailsLocation" character varying NOT NULL, "otherDetailsBasicinfo" character varying NOT NULL, "otherDetailsAmenities" character varying NOT NULL, "otherDetailsNearby" character varying NOT NULL, "otherDetailsReviews" character varying NOT NULL, "otherDetailsComments" character varying NOT NULL, CONSTRAINT "PK_e54c883e9854679675af9f4f5c3" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "house_details"`);
    }

}
