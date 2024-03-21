import Accordion from "./components/Accordion/Accordion";
import AccordionItem from "./components/Accordion/AccordionItem";

function App() {
    return (
        <main>
            <section>
                <h2>Why work with us?</h2>
                <Accordion className="accordion">
                    <AccordionItem className="accordtion-item" title={"Example title"}>
                        <article>
                            <p>Example Text</p>
                            <p>More text...</p>
                        </article>
                    </AccordionItem>
                    <AccordionItem tclassName="accordtion-item" itle={"Example title 2"}>
                        <article>
                            <p>Example Text</p>
                            <p>More text...</p>
                        </article>
                    </AccordionItem>
                    <AccordionItem className="accordtion-item" title={"Example title 3"}>
                        <article>
                            <p>Example Text</p>
                            <p>More text...</p>
                        </article>
                    </AccordionItem>
                    <AccordionItem className="accordtion-item" title={"Example title 4"}>
                        <article>
                            <p>Example Text</p>
                            <p>More text...</p>
                        </article>
                    </AccordionItem>
                </Accordion>
            </section>
        </main>
    );
}

export default App;
