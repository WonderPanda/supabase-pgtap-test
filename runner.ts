import execa from "execa";

(async () => {
    const result = await execa('cat output/example-tap.txt | yarn tap -');
    console.log(result.exitCode);
})();
