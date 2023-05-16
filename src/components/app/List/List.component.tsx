interface Props {
	children?: JSX.Element
}

export default function List({ children }: Props): JSX.Element {
	return <>{children ?? <p>No hay items en la lista</p>}</>
}
