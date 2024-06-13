import {render, screen, waitFor} from "@testing-library/react";
import App from "../../App.tsx";
import userEvent from '@testing-library/user-event';



describe('Zeigt Quizzes vom Backend an', () => {
    it('meldet sich als Player 1 an', async () => {
        render(<App />);

        // Login über Shortcut
        userEvent.keyboard('{Control>}{Shift>}1{/Shift}{/Control}');

        // Homepage laden
        await waitFor(() => {
            const element = screen.getByText('Übersicht');
            expect(element).toBeInTheDocument();
        });

        // Warten auf das Laden der Quizzes
        const quizSection = await screen.findByRole('heading', { name: 'Allgemeinwissen' });
        const quizSection2 = await screen.findByRole('heading', { name: 'Geografie' });
        expect(quizSection).toBeInTheDocument();
        expect(quizSection2).toBeInTheDocument();

    });
});