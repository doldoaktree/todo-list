import {expect, test} from 'vitest'
import {Home} from '../page'

test('Next.js logo is visible', ()=> {
    
    expect('Next.js renders successfully', ()=> {
        render (<Home/>);
        const element = screen.getByText('Get Started')
        expect(element).toBeInTheDocument();
    })
})

