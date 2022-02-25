import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Search } from "../components/Search";
import { usePokemons } from "../hooks/usePokemons";

const usePokemonsMocked = usePokemons;

jest.mock("../hooks/usePokemons");

describe("Search component", () => {
  it('tests if the component is rendering correctly', () => {
    const searchPokemonMocked = jest.fn();
    usePokemonsMocked.mockImplementation(() => ({ isLoading: false }));

    render(<Search />)

    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("button")).not.toBeDisabled();
    expect(searchPokemonMocked).not.toBeCalled();
  });

  it('test if the button is disabled when is loading', () => {
    const searchPokemonMocked = jest.fn();
    usePokemonsMocked.mockImplementation(() => ({ isLoading: true }));
    render(<Search />)

    expect(screen.getByRole("button")).toBeDisabled();
    expect(searchPokemonMocked).not.toBeCalled();
  });

  it('test if the function to search pokemons is being running', async () => {
    const searchPokemonMocked = jest.fn(e => e.preventDefault());

    usePokemonsMocked.mockImplementation(() => ({ 
      isLoading: false, 
      searchPokemon: searchPokemonMocked
    }));

    render(<Search />)
    
    fireEvent.input(screen.getByRole('textbox'), {target: { value: "pikachu" }})
    fireEvent.click(screen.getByRole("button"));
    
    expect(searchPokemonMocked).toBeCalled();
  });
})