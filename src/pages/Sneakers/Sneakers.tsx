import React, { useState } from "react";

import { SneakersBlock } from "../../components/SneakerBlock/SneakersBlock";
import { useGetProductQuery } from "../../redux/api/api";
import { SneakerFilter } from "../../components/SneakerFilter/SneakerFilter";
import { CiCircleList } from "react-icons/ci";

import styles from "./Sneakers.module.scss";
import cn from "clsx";
import { useDebounce } from "../../hooks/useDebounce";
import { Link } from "react-router-dom";
import Page from "../../components/Pagination/page";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useAction } from "../../hooks/useActions";

export const Sneakers: React.FC = () => {
  const { queryTerm, page, category, filterOpen } = useTypedSelector(
    (state) => state.filters
  );
  const [minPrice, setMinPrice] = useState();
  const [maxPrice, setMaxPrice] = useState();
  const deboucedMinPrice = useDebounce(minPrice, 500);
  const deboucedMaxPrice = useDebounce(maxPrice, 500);
  const { setQueryTerm, setOpenFilter } = useAction();
  const { data, isLoading } = useGetProductQuery({
    queryTerm,
    page,
    category,
    deboucedMinPrice,
    deboucedMaxPrice,
  });
  const pageCount = Math.ceil(data?.length / 12);

  return (
    <div className={styles.wrapper}>
      <div className={styles.globaltitle}>
        {queryTerm ? `Search results: "${queryTerm}"` : "CATALOG"}
      </div>
      <div className={styles.filtersRow}>
        <div className={styles.navigation}>
          <Link className={styles.returnToHome} to="/">
            <span>HOME</span>
          </Link>
          <span> / </span>
          {queryTerm ? (
            <div className={styles.catalogNav}>
              <Link
                onClick={() => setQueryTerm("")}
                className={styles.returnToCategory}
                to="/catalog"
              >
                <span> CATALOG</span>
              </Link>
              <div>/ Search results: "{queryTerm}"</div>
            </div>
          ) : (
            <span>CATALOG</span>
          )}
        </div>
        <div
          onClick={() => setOpenFilter(!filterOpen)}
          className={styles.filter}
        >
          {filterOpen ? "CLOSE FILTERS" : "OPEN FILTERS"}
          <CiCircleList />
        </div>
      </div>
      <div className={styles.row}>
        <div
          className={cn(styles.explorer, {
            [styles.filterOpened]: filterOpen,
          })}
        >
          <aside>
            <SneakerFilter
              minPrice={minPrice}
              maxPrice={maxPrice}
              setMinPrice={setMinPrice}
              setMaxPrice={setMaxPrice}
            />
          </aside>

          <section className={styles.grid}>
            {isLoading ? (
              <div>Loading</div>
            ) : data ? (
              data.length > 1 ? (
                data
                  .slice((page - 1) * 12, page * 12)
                  .map((product: any) => (
                    <SneakersBlock key={product.id} {...product} />
                  ))
              ) : (
                <div className={styles.noProduct}>
                  No products matching your request were found.
                </div>
              )
            ) : (
              <div> Not Found </div>
            )}
          </section>
        </div>
        <div className={styles.pagination}>
          {data?.length > 1 ? <Page page={page} pageCount={pageCount} /> : ""}
        </div>
      </div>
    </div>
  );
};
