/// <reference types="@sveltejs/kit" />

declare global {
	declare namespace App {
		interface Locals {
			user: User;
		}
	}

	interface User {
		username: string;
	}

	interface AuthUser extends User {
		password: string;
	}
}

export {};
