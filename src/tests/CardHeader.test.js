import { fireEvent, render, screen } from "@testing-library/react";
import { CardHeader } from "../components/Card/CardHeader";
import { usePokemons } from "../hooks/usePokemons";

const usePokemonsMocked = usePokemons;

jest.mock("../hooks/usePokemons");

const toggle = jest.fn();

const pokemon = {
  id: 1,
  name: "bulbasaur",
  image: "test",
  types: [ "grass", "poison" ]
}

describe("Card Component", () => {
  beforeEach(() => {
    usePokemonsMocked.mockImplementation(() => ({ toggle: toggle }));
  });

  it('tests if the component is rendering correctly', () => {
    render(<CardHeader pokemon={pokemon} />)

    expect(screen.getByText(pokemon.name)).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', `/details/${pokemon.name}`);
    expect(toggle).not.toBeCalled();
  });

  it('tests if the toggle function is being running', () => {
    render(<CardHeader pokemon={pokemon} />);

    fireEvent.click(screen.getByRole("img"));

    expect(toggle).toBeCalled();
  });
})