import FormAdd from "./form";

let usersList = {};

export default async function Home() {
	const fetchUsers = async (e) => {
		e.preventDefault();
		const users = await fetch("http://localhost:4444/api/users", {
			cache: "no-store",
			next: { revalidate: 10 },
		}).then((res) => res.json());
		console.log(users);
		usersList = users;
	};
	const addUser = (e) => {
		e.preventDefault();
		const rep = fetch("http://localhost:4444/api/create", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name: name,
				surname: surname,
			}),
		});
		if (rep.status === 200) {
			window.location.replace("/");
		}
	};
	return (
		<div>
			Hello to{" "}
			{typeof usersList !== "undefined" && usersList.length > 0
				? usersList.map((user) => (
						<div key={user.id}>
							{user.name} {user.surname}
						</div>
					))
				: "No users"}
			<FormAdd func={addUser}/>
			<form onSubmit={fetchUsers}>
				<button type="submit">Update</button>
			</form>
		</div>
	);
}
