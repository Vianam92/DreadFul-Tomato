import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Api from'./Api';
import data from "./data/data.json"

describe("Programs Movies and Series" , () => {
    beforeAll(() => jest.spyOn(window , 'fetch'))

    it('should show a list of movies and series from the Api' , async () => {
        window.fetch.mockResolvedValueOnce({
            ok:true,
            json:async () => data
        });

        render(<Api />);
        expect(window.fetch).toHaveBeenCalledTimes(2);
        expect(window.fetch).toHaveBeenCalledWith(
            "./data/data.json"
        );

    
})
})