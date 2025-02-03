import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import About from "../components/About";
import Services from "../components/Services";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/About">
                <About/>
            </ComponentPreview>
            <ComponentPreview path="/Services">
                <Services/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews