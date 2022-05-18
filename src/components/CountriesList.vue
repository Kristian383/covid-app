<template>
  <div class="countries-container">
    <div class="top-section">
      <h3>A summary of new and total cases per country for 18. may, 2022</h3>
      <input type="text" class="text-search" placeholder="Search country" />
    </div>
    <div class="countries-list">
      <table>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Country</th>
            <th scope="col">Active cases</th>
            <th scope="col">Total confirmed</th>
            <th scope="col">New deaths</th>
            <th scope="col">Total deaths</th>
            <th scope="col">New recovered</th>
            <th scope="col">Total recovered</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Index">1</td>
            <td data-label="Country">
              <router-link to="/country/croatia">Croatia</router-link>
            </td>
            <td data-label="Active cases">1,190</td>
            <td data-label="Total confirmed">1,190</td>
            <td data-label="New deaths">1,190</td>
            <td data-label="Total deaths">1,190</td>
            <td data-label="New recovered">1,190</td>
            <td data-label="Total recovered">1,190</td>
          </tr>
          <tr>
            <td data-label="Index">2</td>
            <td data-label="Active cases">Serbia</td>
            <td data-label="Active cases">1,190</td>
            <td data-label="Total confirmed">1,190</td>
            <td data-label="New deaths">1,190</td>
            <td data-label="Total deaths">1,190</td>
            <td data-label="New recovered">1,190</td>
            <td data-label="Total recovered">1,190</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
@media screen and (max-width: 848px) {
  @include max_848px_table;
}

.countries-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 0.5rem;

  .top-section {
    @extend .countries-container;
    align-items: center;

    @include lg {
      flex-direction: row;
    }

    .text-search {
      border: 1px solid #ccc;
      border-radius: 8px;
      padding: 10px 16px 12px;
      line-height: 24px;
      outline: none;
      font-size: 16px;

      &:focus {
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        border-color: $light_blue;
      }
    }
  }

  @include table_normal;
}
</style>
