import { Layout } from "../layouts"

export const NotFound = () => {
    return (
        <Layout>
            <section style={{height: "76vh", width: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>
                <h1 style={{color: "black"}}>Ruta no encontrada, por favor, vuelva al inicio.</h1>
            </section>
        </Layout>
    )
}