-- approach: match table to itself looking for e1.id = e2.managerID
-- HAVING is similar to WHERE, but is used for aggregate functions
-- want count >= 5
-- group by e1.id and e1.name bc can have same name but different ids
-- in this case, we want the group that has >= 5
SELECT e1.name
FROM Employee e1
JOIN Employee e2
ON e1.id = e2.managerID 
GROUP BY e1.id, e1.name
HAVING COUNT(e1.id) >= 5
