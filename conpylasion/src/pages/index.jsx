import FormAdd from "./form.js";

export default async function Home() {
	const users = await fetch("localhost:3000/api/users", {
		cache: "no-store",
	}).then((res) => res.json());
	return (
		<div>
			Hello to{" "}
			{users.map((user) => {
				return (
					<div key={user.id}>
						<p>{user.name}</p>
						<p>{user.surname}</p>
					</div>
				);
			})}
			<FormAdd />
		</div>
	);
}
