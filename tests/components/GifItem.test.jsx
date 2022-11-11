import { render } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas de GiftItem', () => {
    
    const title = 'Titulo1';
    const url = 'https//url.com';
    
    test('Debe coincidir el snapshot ', () => {
        const { container } = render(<GifItem title={title} url={url}/>)
        expect(container).toMatchSnapshot();
    });
});