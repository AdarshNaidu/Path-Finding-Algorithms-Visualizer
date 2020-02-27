let dijkstra = {
    run: async function () {
        let t1 = performance.now();
        pathfind.begin();
        let cameFrom = {};
        let q = new MinHeap();
        q.push(grid.startPos, 0);
        while (!q.empty()) {
            let cur = q.pop();
            await pathfind.sleep(10);
            

            let n = pathfind.neighborsDiag(cur);
            for (let i = 0; i < n.length; i++) {
                let intPos = n[i].pos.toInt();
                if (dist[intPos] != null) {
                    continue;
                }
               
            }
        }

        

        await pathfind.reconstructPath(cameFrom);

        pathfind.end();
        let t2 = performance.now();
        console.log("dijkstra's Took ", t2 - t1, "milliseconds")
        document.getElementById('time').innerText = `${t2-t1} milliseconds`;
    },
}
