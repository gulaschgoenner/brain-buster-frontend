import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Login from "../../components/account/Login.tsx";

describe('Login Component', () => {
    test('rendert die Loginseite', () => {
        render(<Login/>)
        const button = screen.getByText('Login')
        expect(button).toHaveAttribute("disabled", true);
    })
})