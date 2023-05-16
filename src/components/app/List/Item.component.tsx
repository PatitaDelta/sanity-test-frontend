import { type Pet } from "../../../utils/interfaces/Pet"

interface Props {
	element: Pet
}

export default function Item({ element }: Props): JSX.Element {
	return (
		<div>
			<div>
				<h1>{element.name}</h1>
				<h2>{element.breed}</h2>
			</div>
			<img src={element.icon} alt={element.name} />
		</div>
	)
}
