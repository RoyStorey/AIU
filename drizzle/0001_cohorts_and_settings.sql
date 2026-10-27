CREATE TABLE `program_settings` (
	`slug` text PRIMARY KEY NOT NULL,
	`hidden` integer DEFAULT false NOT NULL,
	`updated_at` integer DEFAULT (unixepoch()) NOT NULL
);
--> statement-breakpoint
ALTER TABLE `enrollments` ADD `cohort_start` text;--> statement-breakpoint
ALTER TABLE `enrollments` ADD `concentration` text;--> statement-breakpoint
CREATE INDEX `enrollments_cohort_idx` ON `enrollments` (`program_slug`,`cohort_start`);