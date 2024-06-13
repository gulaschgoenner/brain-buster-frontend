import { expect, test } from 'vitest'
import {render, screen} from "@testing-library/react";
import App from "../../App.tsx";


test('komplexe Logik', () => {
    expect(1+1).toBe(2)
})

test('Rendert Loginscreen', () => {
    render(<App/>);
    const linkElement = screen.getByText("Anmelden");
    expect(linkElement).toBeInTheDocument();
});