const indexName = "themejs_hit_index";
let state = sessionStorage.getItem(indexName);
if (state === null) {
    sessionStorage.setItem(indexName, "0");
}
sessionStorage.setItem(indexName, "" + (parseInt(sessionStorage.getItem(indexName) ?? "0") + 1));

export const hitIndex = parseInt(sessionStorage.getItem(indexName) ?? "0");
