const fs = require('fs');
const path = require('path');
const { Brand } = require('../../config/db');

const getBrandsFilePath = path.join(__dirname, '..', '..', '..', 'json/db.json');

const getAllBrands = async () => {
    try {
        const data = fs.readFileSync(getBrandsFilePath, 'utf8');
        const jsonData = JSON.parse(data);                                  
        const brandsData = jsonData.brands;

        const brands = await Promise.all(brandsData.map(async (brandData) => {
            const existingBrand = await Brand.findOne({
                where: { name: brandData.name },
            });
            if(!existingBrand){
                const brand = await Brand.create({
                    name: brandData.name,                                                                                           
                });
            return brand;
            } else {
                return existingBrand;
            }
        }));
        const brandNames = brands.map(brand => brand.name);
        return brandNames;
    } catch (error) {
        console.error('Hubo un error al obtener las marcas:', error);
        throw new Error('Hubo un error interno del servidor.');
    }
};

module.exports = { getAllBrands };

