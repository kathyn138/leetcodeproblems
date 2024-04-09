-- not goes in both conditions
SELECT * 
FROM Cinema c
WHERE NOT c.id % 2 = 0 AND NOT c.description = 'boring'
ORDER BY c.rating DESC;