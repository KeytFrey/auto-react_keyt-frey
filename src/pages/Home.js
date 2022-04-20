import '../components/Catalog/catalog.css'
import Catalog from "../components/Catalog";
import CatalogHocks from "../components/CatalogHocks";
import CatalogRedux from "../components/CatalogRedux";

function HomePage () {

    return (
        <>
            <h2>Главная</h2>

            <div className="catalog_content">
            <h3>Компонент каталога на React Class</h3>
            <Catalog />
            </div>
            <div className="catalog_content">
            <h3>Компонент каталога на React Hocks</h3>
            <CatalogHocks />
            </div>
            <div className="catalog_content">
            <h3>Компонент каталога на React Redux</h3>
            <CatalogRedux />
            </div>
        </>
    )
}

export default HomePage;