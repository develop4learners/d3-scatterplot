export function DropdownBuilder() {
  let createDowndownMenu = (nameAttribute, containerClass) => {
    return d3.select("body")
             .select(`div.${containerClass}`)
             .append("select")
             .attr("name", nameAttribute);
  }

  let populateDropdownOptions = (dropdown, data) => {
    return dropdown.selectAll('option')
                   .data(data)
                   .enter()
                   .append('option')
                   .text((featureName) => (featureName));
  };
  let createAllDropdowns = () => {
    this.clickOnFeatureDropdown = createDowndownMenu(
      'color_column',
      'click-on-feature-container'
    );
    this.coloringDropdown = createDowndownMenu(
      'color_column',
      'color-by-feature-container'
    );
    this.searchDropdown = createDowndownMenu(
      'color_column',
      'search-by-feature-container'
    );
    this.shapingDropdown = createDowndownMenu(
      'color_column',
      'shape-by-feature-container'
    );
    this.transparentDropdown = createDowndownMenu(
      'color_column',
      'transparency-by-feature-dropdown-container'
    );
  };
  this.build = (categorySearchData, categoriesCopyColor, categories) => {
    createAllDropdowns();
    // Searching
    populateDropdownOptions(this.searchDropdown, categorySearchData)
    // Coloring
    populateDropdownOptions(this.coloringDropdown, categoriesCopyColor)
    // Transparent
    populateDropdownOptions(this.transparentDropdown, categorySearchData)
    // Click on feature
    populateDropdownOptions(this.clickOnFeatureDropdown, categorySearchData)
    // Shaping
    populateDropdownOptions(this.shapingDropdown, categories)
  };
  this.setDropdownEventHandlers = (plotting, plotting2, plotting3, plotting4, plotting5) => {
    this.coloringDropdown.on("change", plotting);

    // Searching
    this.searchDropdown.on("change", plotting2);

    // Transparent
    this.transparentDropdown.on("change", plotting3);

    // Click on feature
    this.clickOnFeatureDropdown.on("change", plotting4);

    // Shaping
    this.shapingDropdown.on("change", plotting5);
  };
};