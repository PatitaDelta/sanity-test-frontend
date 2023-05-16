import Item from "./List/Item.component"
import List from "./List/List.component"
import "./App.css"

export default function App(): any {
	return (
		<>
			<h1>App</h1>
			<List />
			<List>
				<span>Hola</span>
			</List>
			<List>
				<Item
					element={{
						name: "Prueba",
						breed: "Pastor Aleman",
						icon: "https://picsum.photos/id/1/200",
					}}
				/>
			</List>
		</>
	)
}
