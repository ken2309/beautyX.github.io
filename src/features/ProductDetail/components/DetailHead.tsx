import React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import DetailDesc from './DetailDesc';
import DetailComment from '../../MerchantDetail/components/DetailComment';
import DetailMer from '../components/DetailMer';
import SuggestionList from '../../ServiceDetail/components/SuggestionList'

const styleCmt = {
      width: '100%'
}
function DetailHead(props: any) {
      const { product, org, listServices } = props;
      const [value, setValue] = React.useState('1');
      const handleChange = (event: React.SyntheticEvent, newValue: string) => {
            setValue(newValue);
      };    
      return (
            <div className="product-cnt__left">
                  <img
                        src={"https://picsum.photos/650/976?random=" + product.id}
                        alt=""
                        className="product-cnt__left-img"
                  />
                  <div className="product-cnt__left-tabs">
                        <Box sx={{ width: '100%', typography: 'body1' }}>
                              <TabContext value={value}>
                                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                          <TabList onChange={handleChange} aria-label="lab API tabs example">
                                                <Tab label="Mô tả sản phẩm" value="1" />
                                                <Tab label="Đánh giá" value="2" />
                                                {
                                                      product.is_product === false ? <Tab label="Gợi ý đi kèm" value="4" /> : ''
                                                }
                                                <Tab label="Về doanh nghiệp" value="3" />
                                          </TabList>
                                    </Box>
                                    <TabPanel value="1"><DetailDesc product={product} /></TabPanel>
                                    <TabPanel value="2">
                                          <DetailComment
                                                styleCmt={styleCmt}
                                          />
                                    </TabPanel>
                                    <TabPanel value="3">
                                          <DetailMer
                                                org={org}
                                          />
                                    </TabPanel>
                                    {
                                          product.is_product === false ?
                                                <TabPanel value="4">
                                                      <SuggestionList
                                                            product={product}
                                                            listServices={listServices}
                                                      />
                                                </TabPanel>
                                                :
                                                ''
                                    }

                              </TabContext>
                        </Box>
                  </div>
            </div>
      );
}

export default DetailHead;