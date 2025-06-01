package com.reza.skilltrack.repository;

import com.reza.skilltrack.entity.Skill;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SkillRepository extends JpaRepository<Skill, Long> {
}

