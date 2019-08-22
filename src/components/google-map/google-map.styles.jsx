import styled from "styled-components"

export const MapContainer = styled.div`
  position: relative;
  width: 100%;
	height: 100%;
	color: #023767;

	h4 {
		margin-bottom: 10px;
	}

	p {
		margin-bottom: 5px;
		text-align: center;
	}

	a {
		color: #023767;
		font-weight: 700;
    box-shadow: inset 0 -2px 0 0 #94bae9;
    margin: 0 .15rem;
		border-bottom: 1px solid #94bae9;

		&:hover {
			background: #94bae9;
		}
	}
`
