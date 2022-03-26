class Config {

}

class DevelopmentConfig extends Config {
    areasUrl = "http://localhost:3001/api/areas/";
    treksByAreaUrl = "http://localhost:3001/api/treks-by-area/";
    treksUrl = "http://localhost:3001/api/treks/";

}

class ProductionConfig extends Config {
    areasUrl = "http://localhost:3001/api/areas/";
    treksByAreaUrl = "http://localhost:3001/api/treks-by-area/";
    treksUrl = "http://localhost:3001/api/treks/";
}

const config = process.env.NODE_ENV === 'production' ? new ProductionConfig() : new DevelopmentConfig()

export default config