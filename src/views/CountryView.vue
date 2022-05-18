<template>
  <div class="country-container">
    <h2 class="country-title">Croatia</h2>
    <h4>Total COVID Cases:</h4>
    <h3 style="color: #424242">2,931,123</h3>
    <h4 style="color: #000">Deaths:</h4>
    <h3 style="color: #c22a2a">2,931,123</h3>
    <h4 style="color: #000">Recovered:</h4>
    <h3 style="color: #69b34c">2,931,123</h3>
    <div class="country-detail-container">
      <table>
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Confirmed</th>
            <th scope="col">Deaths</th>
            <th scope="col">Recovered</th>
            <th scope="col">Active cases</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Date">Friday 15th 2022</td>
            <td data-label="Confirmed">2,222,222</td>
            <td data-label="Deaths">1,190</td>
            <td data-label="Recovered">1,190</td>
            <td data-label="Active cases">1,190</td>
          </tr>
          <tr>
            <td data-label="Date">Thursda 14th 2022</td>
            <td data-label="Confirmed">2,222,222</td>
            <td data-label="Deaths">1,190</td>
            <td data-label="Recovered">1,190</td>
            <td data-label="Active cases">1,190</td>
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
.country-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0 auto;
  padding-top: 2rem;
  align-items: center;
  max-width: 980px;
  width: 100%;

  .country-title {
    margin-bottom: 1rem;
  }

  .country-detail-container {
    @include table_normal;

    margin-top: 1rem;

    @media screen and (max-width: 848px) {
      @include max_848px_table;
    }
  }
}
</style>
