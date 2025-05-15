export type Student = { id: string; firstname: string; lastname: string };

export type StudentDetail = Student & {
	email: string;
	age: number;
	class: string;
};
