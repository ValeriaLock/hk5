package cs2031.utec.edu.pe.repositories;

import com.example.sem10.model.GroupType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GroupTypeRepository extends JpaRepository<GroupType, Long> {
}
