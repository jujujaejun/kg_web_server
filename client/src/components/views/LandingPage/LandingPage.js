import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { Icon, Col, Card, Row } from 'antd';
import ImageSlider from '../../utils/ImageSlider';
import CheckBox from './Sections/CheckBox';
import RadioBox from './Sections/RadioBox';
import { category, decadeRanges } from './Sections/Datas';
import SearchFeature from './Sections/SearchFeature';

const { Meta } = Card;

function LandingPage() {

    const [Products, setProducts] = useState([])
    const [Skip, setSkip] = useState(0)
    const [Limit, setLimit] = useState(8)
    const [PostSize, setPostSize] = useState()
    const [SearchTerms, setSearchTerms] = useState("")

    const [Filters, setFilters] = useState({
        category: [],
        decadeRanges: []
    })

    useEffect(() => {

        const variables = {
            pageno: Skip,
            displaylines: Limit,
        }

        getProducts(variables)

    }, [])

    const getProducts = (variables) => {
        // GET 요청 시에는 params로 쿼리 파라미터를 전달
        Axios.get('/api/book/getBooks', { params: variables })
            .then(response => {
                console.log("Received Data:", response.data); // 받아온 데이터 출력
                setProducts(response.data.products || []); // 받아온 데이터를 상태로 설정
            })
            .catch(error => {
                console.error("API 요청 오류:", error.message || error); // 오류 로그 출력
                alert('An error occurred while fetching data. Please try again later.');
            });
    };
    
    
    const onLoadMore = () => {
        let skip = Skip + Limit;

        const variables = {
            skip: skip,
            limit: Limit,
            loadMore: true,
            filters: Filters,
            searchTerm: SearchTerms
        }
        getProducts(variables)
        setSkip(skip)
    }


    const renderCards = Products.map((product, index) => {
        console.log(product.title)
        return <Col key={index} lg={6} md={8} xs={24}>
        <Card
            hoverable={true}
            cover={<div>{product.title}</div>}
        >
            <Meta
                title={product.title}
                description={`Author: ${product.author}, Year: ${product.publishYear}`}
            />
        </Card>
    </Col>
    })


    const showFilteredResults = (filters) => {

        const variables = {
            skip: 0,
            limit: Limit,
            filters: filters

        }
        getProducts(variables)
        setSkip(0)

    }

    const handledecadeRanges = (value) => {
        const data = decadeRanges;
        let array = [];

        for (let key in data) {

            if (data[key]._id === parseInt(value, 10)) {
                array = data[key].array;
            }
        }
        console.log('array', array)
        return array
    }

    const handleFilters = (filters, category) => {

        const newFilters = { ...Filters }

        newFilters[category] = filters

        if (category === "decadeRanges") {
            let decadeRangesValues = handledecadeRanges(filters)
            newFilters[category] = decadeRangesValues

        }

        console.log(newFilters)

        showFilteredResults(newFilters)
        setFilters(newFilters)
    }

    const updateSearchTerms = (newSearchTerm) => {

        const variables = {
            pageno: 1,
            displaylines: 4,
            search: `${category[Filters.category].name}, ${newSearchTerm}`

        }

        setSkip(0)
        setSearchTerms(newSearchTerm)

        getProducts(variables)
    }


    return (
        <div style={{ width: '75%', margin: '3rem auto' }}>
            <div style={{ textAlign: 'center' }}>
                <h2> 지식의 공간 <Icon type="rocket" />  </h2>
            </div>

            
            {/* Search  */}
            <div style={{ display: 'flex', justifyContent: 'center', margin: '1rem auto' }}>

                <SearchFeature
                    refreshFunction={updateSearchTerms}
                />

            </div>


            {/* Filter  */}
            <div style={{ display: 'flex', justifyContent: 'center', margin: '1rem auto' }}>
                <Row gutter={[16, 16]}>
                    <Col lg={12} xs={24} >
                        <CheckBox
                            list={category}
                            handleFilters={filters => handleFilters(filters, "category")}
                        />
                    </Col>
                    <Col lg={12} xs={24}>
                        <RadioBox
                            list={decadeRanges}
                            handleFilters={filters => handleFilters(filters, "decadeRanges")}
                        />
                    </Col>
                </Row>
            </div>



            {Products.length === 0 ?
                <div style={{ display: 'flex', height: '300px', justifyContent: 'center', alignItems: 'center' }}>
                    <h2>No book yet...</h2>
                </div> :
                <div>
                    <Row gutter={[16, 16]}>

                        {renderCards}

                    </Row>


                </div>
            }
            <br /><br />

            {PostSize >= Limit &&
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button onClick={onLoadMore}>Load More</button>
                </div>
            }


        </div>
    )
}

export default LandingPage
